export const fetchNotes = async () => {
  const url = 'https://susgmazwm2.execute-api.us-east-2.amazonaws.com/testing2';
  const response = await fetch(url);
  const notes = await response.json();
  return notes;
};

export const postNote = async (note) => {
  try {
    const url = 'https://susgmazwm2.execute-api.us-east-2.amazonaws.com/testing2';
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(note)
    });
    const status = await response.json();
    console.log(status);
  } catch (error) {
    console.log(error);
  }
};