const Snippets = ({ snippets })=>{
    let __snippets
    __snippets = snippets.split(" ")

    return(
        <div className="px-3 snippet-list">
            {
                __snippets && __snippets.map((sn, index)=>(
                    <span key={index}>{sn}</span>
                ))
            }
        </div>
    )
}

export default Snippets