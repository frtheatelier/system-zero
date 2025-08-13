import { useState } from 'react';

// tried using codedex to learn. it's cool but man I get Demotivated
const dummyData = {
    name: 'Lorem Ipsum',
    description:'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum erat, blandit id felis eget, condimentum aliquet neque. Duis at dapibus nisl, quis suscipit ante. Cras vestibulum vel quam id tristique. In consequat, lectus a sagittis faucibus, orci augue consequat dolor, eget euismod lorem massa eu sapien. Mauris sagittis consequat semper. Pellentesque interdum dignissim augue, in ullamcorper risus imperdiet vel. Pellentesque quis blandit elit, eu lobortis orci. Nunc facilisis lorem erat, viverra ornare lorem pharetra sit amet. Mauris at felis sed nulla maximus facilisis. Proin vulputate luctus erat, quis eleifend turpis. Quisque vestibulum nisl ac auctor auctor. Etiam enim ipsum, congue et est eleifend, eleifend feugiat massa.',
};

const dummyCharacter = [
    { name:'A', id: 1, imgUrl: 'https://images2.imgbox.com/1a/f9/KBjSiZTT_o.jpg' },
    { name:'B', id: 2, imgUrl: 'https://images2.imgbox.com/1e/c3/RdF872gE_o.png' },
    { name:'C', id: 3, imgUrl: 'https://images2.imgbox.com/4e/54/n3AviOTR_o.png' },
]

function About() {
    // data should contain name and description
    return (
        <>
            <h2>{dummyData.name}</h2>
            <p>{dummyData.description}</p>
        </>
    );
}

function Character() {
    const dummyCharacterList = dummyCharacter.map(character =>
        <li key={character.id} style="display: inline;">
            <img src={character.imgUrl} alt={character.name} />
            <span>{character.name}</span>
        </li>
    );

    return (
        <>
            <h2>Characters</h2>
            <ul>{dummyCharacterList}</ul>
        </>
    );
}

function Lore(data) {
    return (
        <div></div>
    );
}

let abt, chr, lore = 0
var content = <p>Choose a section</p>

function updateContent(abt, chr, lore) {
    content = <div>
        {abt ? (
            <About />
        ) : chr ? (
            <Character />
        ) : lore ? (
            <Lore />
        ) : (
            <p>Choose a section</p>
        )}
    </div>;

    console.log(content);

    return;
}

function showSection(name) {
    abt = name == "about";
    chr = name == "character";
    lore = name == "lore";

    console.log(abt, chr, lore);

    updateContent(abt, chr, lore);

    return;
}



function createBtn(namee) {
    function handleClick(e) {
        console.log(e.target.id);
        showSection(e.target.id);
    }

    return (
        <button id={namee} onClick={(e) => handleClick(e)}>{namee}</button>
    );
}

let aboutBtn = createBtn('about');
let charBtn = createBtn('character');
let loreBtn = createBtn('lore');

export default function MyApp() {
    return (
        <div>
            <h1>Worlds</h1>
            <ul class="btnNav">
                <li>{aboutBtn}</li>
                <li>{charBtn}</li>
                <li>{loreBtn}</li>
            </ul>
            <div id="content">{content}</div>
        </div>
    );
}