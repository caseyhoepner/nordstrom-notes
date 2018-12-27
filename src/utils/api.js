export const fetchNotes = async () => {
  const url = 'https://susgmazwm2.execute-api.us-east-2.amazonaws.com/testing2';
  const response = await fetch(url);
  
  return await response.json();
};