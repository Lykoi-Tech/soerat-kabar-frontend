import './index.scss';

const BigTitle = ({title, bigTitleClass}) => {
    return (
        <div className={`big-title ${bigTitleClass}`}>
            <button>{title}</button>
        </div>
    )
}

export default BigTitle;