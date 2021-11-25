import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useSelector} from 'react-redux'


function Detail() {
  const [detail, setDetail] = useState(null)
  const params = useParams();
  const posts = useSelector(({listPost}) => listPost)
  }

  useEffect(() => {
    console.log(post);
    const findDetail = posts.find(el => el.id === +params.id)
    setDetail(findDetail)
  }, [params, posts])

  if(!detail){
    return <></>;
  }

  return (
    <div className="p-5">
      <div className="d-flex justify-content-center">
        <h3>{detail.title}</h3>
      </div>

      <div className="d-flex justify-content-center mt-2">
        <div style={{width: "50vw"}}>
          <p>{detail.body}</p>
        </div>
      </div>
    </div>
  )
}