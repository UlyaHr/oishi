import noDataTemplate from '../views/templates/nodata-template';

const handleError = ({ elementId, functionName, error }) => {
  const element = document.querySelector(elementId);
  if (error.message === 'Failed to fetch') {
    element.innerHTML = noDataTemplate('Please check your connection');
  } else {
    element.innerHTML = noDataTemplate('Something went wrong');
  }
  console.error(functionName, error);
};

export default handleError;
