import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { resetEdit } from '../store/actions/ui';

const ListScreen = ({
  data,
  renderItem,
  keyExtractor,
  LastCard,
  footerIcon,
  footerIconText,
  footerOnPress,
}) => {
  const dispatch = useDispatch();
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => dispatch(resetEdit())}
    >
      <FlatList
        style={styles.listWrapper}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={() => <View />}
        ListHeaderComponentStyle={styles.topMargin}
        ListFooterComponent={() => LastCard || <View />}
        ListFooterComponentStyle={styles.lastCard}
      />
      <Footer
        iconName={footerIcon}
        text={footerIconText}
        onPress={footerOnPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA6A',
  },
  listWrapper: {
    marginLeft: 20,
    marginRight: 20,
  },
  cardSeparator: {
    margin: 10,
  },
  topMargin: {
    marginTop: 20,
  },
  lastCard: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default ListScreen;