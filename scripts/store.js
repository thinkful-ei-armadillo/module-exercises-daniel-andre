/* eslint-disable no-empty */
/* eslint-disable no-console */
/* global cuid */
'use strict';

const store = (function () {
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  let findById = (function (searchId) {
    return items.find(item => item.id === searchId);
  });

  let addItem = (function (name) {
    try {
      Item.validateName(name);
      items.push(Item.create(name));
    }
    catch (error) {
      return error.message;
    }
  });

  let findAndToggleChecked = (function (id) {
    let objectFound = this.findById(id);
    
    if ( objectFound.checked === true ) {
      objectFound.checked = false;
    }
    else {
      objectFound.checked = true;
    }
  });

  let findAndUpdateName = (function (id, newName) {
    let objectFound = this.findById(id);
    try {
      Item.validateName(newName);
      objectFound.name = newName;
    }
    catch ( error ) {
      return 'Cannot update name: {error.message}';
    }
  });

  let findAndDelete = (function (deleteId) {
    let objectFound = this.findById(deleteId);
    let indexOfObjectFound = this.items.findIndex( id => deleteId === id );
    items.splice(indexOfObjectFound);
  });

  let toggleCheckedFilter = (function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  });

  let setSearchTerm = (function(query) {
    this.searchTerm = query;
  });

  return {       
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };

} () );



