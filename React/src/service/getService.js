const getData = async () => {
  const res = await fetch('/backend/initialLoad.json');
  const data = await res.json();
  return data;
};

export default getData;