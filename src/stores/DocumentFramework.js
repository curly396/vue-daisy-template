import {
  defineStore
} from 'pinia'

export const useDocumentFrameworkStore = defineStore('DocumentFramework', {
  state: () => ({
    objIdentifier: 'Document Title',
    forms: [{
        pgeID: 1,
        title: 'Form 1',
        message: 'This is form 1',
        menuItem: null,
        fields: [{
          pgfID: 1,
          type: 1,
          value: 30.57
        },
        {
          pgfID: 2,
          type: 2,
          value: 'Something Something'
        }
      ]
      },
      {
        pgeID: 2,
        title: 'Form 2',
        message: 'This is form 2',
        menuItem: {
          omnID: 1,
          omnTitle: 'First Group'
        },
        fields: [{
          pgfID: 3,
          type: 1,
          value: 47.47
        },
        {
          pgfID: 1,
          type: 1,
          value: 22.22
        },
        {
          pgfID: 4,
          type: 4,
          value: ''
        }
      ]
      },
      {
        pgeID: 3,
        title: 'Form 3',
        message: 'This is form 3',
        menuItem: {
          omnID: 1,
          omnTitle: 'First Group'
        },
        fields: [{
          pgfID: 5,
          type: 1,
          value: 88.55
        },
        {
          pgfID: 6,
          type: 3,
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
      },
      {
        pgeID: 4,
        title: 'Form 4',
        message: 'This is form 4',
        menuItem: {
          omnID: 2,
          omnTitle: 'Second Group'
        },
        fields: [{
          pgfID: 7,
          type: 1,
          value: 1.02
        },
        {
          pgfID: 8,
          type: 1,
          value: 6.07
        }
      ]
      }
    ],
    status: {
      otsID: 1,
      otsInternalName: 'Grant Approved',
      otsExternalName: 'Grant Approved',
    },
    steps: [{
        otsID: 2,
        otsInternalName: 'Grant in Adjustment',
        otsExternalName: 'Grant in Adjustment',
      },
      {
        otsID: 3,
        otsInternalName: 'Grant Cancelled',
        otsExternalName: 'Grant Cancelled',
      }
    ]
  }),
  getters: {
    pageFields: (state) => {
      return (ID) => state.forms.find(obj => obj.pgeID == ID)
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})