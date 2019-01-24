/* eslint-disable no-console */
/* global cuid */
'use strict';

function validateName(name) {
  if(! name || name === '') {
    throw new Error('Name does not exist');
  }
}

function create(name) {
  return {id: cuid(), name, checked: false};
}

const Item = (function () {
  const workingItem = {
    // id,
    // name,
    // checked,
    validateName,
    create
  };
  return workingItem;
}());