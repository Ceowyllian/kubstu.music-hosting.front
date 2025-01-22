import React from 'react';
import PersonForm from './PersonForm';

function PersonInformation() {
  async function handleCancel() {}

  return <PersonForm onCancel={handleCancel} />;
}

export default PersonInformation;
