export const mockState ={
  people:{
    byId:{
      1:{
        id:1,
        name:'sasaki',
        drinkType: 'Hard',
        check: false
      },
      2:{
        id:2,
        name:'sasaki2',
        drinkType: 'Hard',
        check: false
      }
    },
    allIds:[1, 2]
  },

  drinks:{
    byId:{
      1:{
        id:1,
        created_at:'19:52',
        drinkType: 'Hard',
        price: 500,
        nDrinks: 2,
        peopleId:1
      },
      2:{
        id:2,
        created_at:'20:52',
        drinkType: 'Soft',
        price: 500,
        nDrinks: 3,
        peopleId:2
      },
      3:{
        id:3,
        created_at:'20:52',
        drinkType: 'Soft',
        price: 200,
        nDrinks: 4,
        peopleId:1
      },
    },
    allIds:[1, 2, 3]
  },

  ui:{
    peopleEdit:{
      isEdit:false,
      peopleId: null
    },

    drinkEdit:{
      isEdit:false,
      drinkId: null
    }
  }

}