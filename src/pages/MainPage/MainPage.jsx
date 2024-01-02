import { useState } from "react";
import trackList from "../../assets/trackList";
import style from "./mainPage.module.scss";
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";

const runSearch = (query) => {
    if (!query) {
        return trackList;
    }
    const lowerCaseQuery = query.toLowerCase();

    return (
        trackList.filter((track) =>
            track.title.toLowerCase().includes(lowerCaseQuery)
        ) ||
        trackList.filter((track) =>
            track.artists.toLowerCase().includes(lowerCaseQuery)
        )
    );
};

const MainPage = () => {
    const [track, setTracks] = useState(trackList);

    const handleChange = (event) => {
        const foundTracks = runSearch(event.target.value);
        setTracks(foundTracks);
    };

    return (
        <div className={style.search}>
            <Input
                style={{
                    color: "white",
                    backgroundColor: "transparent",
                    borderRadius: "1",
                }}
                className={style.input}
                placeholder="Пошук"
                onChange={handleChange}
            />

            <div className={style.list}>
                {track.map((track) => (
                    <Track key={track.id} {...track} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;
