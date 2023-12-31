import React, {useState} from "react";

type Props = {
    search: (searchValue: string) => void,
};

const Search: React.FC<Props> = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
};

export default Search;