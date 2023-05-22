import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text, Button } from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';
import { db } from '../../db';
import { ref, onValue } from 'firebase/database';

const All = 'All';

const Home = () => {
  const [todoData, setTodoData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(All);
  const [data, setData] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, 'Services/');
    onValue(starCountRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const newPosts = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setTodoData(newPosts);
      } else {
        setTodoData([]);
      }
    });
  }, []);

  useEffect(() => {
    setData(todoData);
  }, [todoData]);

  useEffect(() => {
    if (selectedCategory === All) {
      setData(todoData);
    } else {
      const filteredData = todoData?.filter(item => item?.categories?.includes(selectedCategory));
      setData(filteredData);
    }
  }, [selectedCategory, todoData]);

  const renderItem = ({ item, index }) => (
    <AttractionCard
      key={item.id}
      style={index % 2 === 0 ? { marginRight: 28, marginLeft: 0 } : { marginRight: 32 }}
      title={item.Name}
      subtitle={item.Location}
      imageSrc={typeof item.imageUrl === 'string' ? { uri: item.imageUrl } :
        (Array.isArray(item.imageUrl) && item.imageUrl.length > 0 ? { uri: item.imageUrl[0] } : null)
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 0 }}>
        <Title text="What do" style={{ fontWeight: 'normal' }} />
        <Title text="you want to do" />
        <Title text="Explore Services" style={styles.subtitle} />
        <Button title="Press me" onPress={() => console.log('Button pressed')} />
      </View>
      <Categories
        selectedCategory={selectedCategory}
        onCategoryPress={setSelectedCategory}
        categories={[All]}
      />
      <FlatList
        data={data}
        numColumns={1}
        style={{ flexGrow: 1 }}
        ListEmptyComponent={<Text style={styles.emptyText}>No Items Found</Text>}
        keyExtractor={item => String(item?.id)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
