import React from 'react'

export default function ItemList(props) {

  return(
        <section className="ItemList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
