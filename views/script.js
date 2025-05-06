document.getElementById('update-button').addEventListener('click', async () => {
    const id = document.getElementById('id_input').value;
    const isComplete = document.getElementById('is_complete_input').value === 'true';

    try {
      const response = await axios.put(`/reminders/${id}`, { isComplete });
      alert(`Reminder updated: ${JSON.stringify(response.data)}`);
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('An error occurred while updating the reminder.');
      }
    }
  });

  document.getElementById('delete-button').addEventListener('click', async () => {
    const id = document.getElementById('delete_id_input').value;

    try {
      const response = await axios.delete(`/reminders/${id}`);
      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('An error occurred while deleting the reminder.');
      }
    }
  });