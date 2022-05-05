

const HeaderMenu = (data) => {
  const names = data.data.filter((id) => {
    const fslkfd = "USD";
    const fslkfd2 = "EUR";
    if (fslkfd === id.cc || fslkfd2 === id.cc) {
      return id;
    }
  });
  const currency=names.map(id=>{
      return <p key={id.cc}>{id.rate}</p>
  })


  return <>{currency}</>;
};

export default HeaderMenu;
