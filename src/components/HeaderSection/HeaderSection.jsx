import "./_headerSection.scss"
function HeaderPages({title, parag}) {
    return (
        <div className="header-section">
            <h1 className="header-title">{title}</h1>
            <p className="header-parag">{parag}</p>
        </div>
    )
}

export default HeaderPages