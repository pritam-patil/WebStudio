import "./styles.css";
import React, { Component } from "react";
import { List, AutoSizer } from "react-virtualized";
import Card from "../card/Card";

const elements = [
    {
        title: "First Element",
        description: "This is the description for the first element.",
        time: "10:00 AM",
    },
    {
        title: "Second Element",
        description: "This is the description for the second element.",
        time: "11:00 AM",
    },
    {
        title: "Third Element",
        description: "This is the description for the third element.",
        time: "12:00 PM",
    },

]

const App = () => {

    const renderRow = ({ index, key, style }) => {
        return (
            <div key={key} style={{ ...style, border: "1px solid black" }}>
                <Card title={elements[index].title} desc={elements[index].description} time={elements[index].time} />
            </div>
        );
    };

    return (
        <div className="App" style={{ height: "100vh", width: "300px" }}>
            {
                <AutoSizer>
                    {({ height, width }) => {
                        return (
                            <List
                                height={height}
                                rowHeight={180}
                                rowRenderer={renderRow}
                                rowCount={elements.length}
                                overscanRowCount={5}
                                width={width}
                            />
                        );
                    }}
                </AutoSizer>
            }
        </div>
    );
}

export default App;
