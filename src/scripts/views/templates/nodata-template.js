const noDataTemplate = (
  message = 'Looks like you have no favorite restaurant.'
) => {
  return `
    <div class="no-data">
      <div>
        <h1>Oops!!!</h1>
        <p>${message}</p>
      </div>
    </div>
  `;
};

export default noDataTemplate;
