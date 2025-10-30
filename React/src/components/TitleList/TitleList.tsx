type TitleListProps = {
    title: string,
    content: string,
}
const TitleList = ({title, content}: TitleListProps) => {
    return (
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
    );
}

export default TitleList;