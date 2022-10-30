function Searchbox({
  setStudentData,
  search,
  setSearch,
  searchResult,
  setSearchResult,
}) {
  //this component handles the search of students. the search will check preferred, middle, and surname

  const copyStudents = [...searchResult];

  function searchFilter(input) {
    const string = input.toLowerCase();

    const searchedStudent = copyStudents.filter(({ names }) => {
      const studentFullName = `${names.preferredName.toLowerCase()} ${names.middleName.toLowerCase()} ${names.surname.toLowerCase()}`;

      const studentFirstLast = `${names.preferredName.toLowerCase()} ${names.surname.toLowerCase()}`;

      if (input === "") {
        return names;
      } else {
        return (
          studentFullName.includes(string) || studentFirstLast.includes(string)
        );
      }
    });

    setStudentData(searchedStudent);
  }

  function handleSearch(e) {
    const value = e.target.value;
    setSearchResult(copyStudents);
    setSearch(value);
    searchFilter(value);
  }

  return (
    <input
      id="searchbar"
      type="text"
      placeholder="Search Students..."
      value={search}
      onChange={(e) => {
        handleSearch(e);
      }}
    />
  );
}

export default Searchbox;
