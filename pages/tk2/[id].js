import { useRouter } from "next/router";

const FilmDisplay = ({}) => {
    const router = useRouter();
    const { id } = router.query;

    return <div>{id}</div>
};

export default FilmDisplay;