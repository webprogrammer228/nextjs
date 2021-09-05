import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { allPosts } from "../../../store/actions/allpostaction";

export default function Listing() {
  const router = useRouter();
  const id = router.query.id;

  const dispatch = useDispatch();
  const { allposts } = useSelector((state) => state.allpost);

  useEffect(() => dispatch(allPosts()), []);

  const obj = allposts[id];
  function back() {
    router.back();
  }

  return (
    <div className="wrapper">
      {allposts.length ? (
        <div className="listing__card">
          <div className="id">
            <p className="object__title">Object №{obj.id + 1}</p>
          </div>
          <div className="listing__images">
            {obj.images.map((elem) => (
              <div className="image" key={elem}>
                <img src={elem}></img>
              </div>
            ))}
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <b> City:</b>
                </td>
                <td>{obj.address.city}</td>
              </tr>
              <tr>
                <td>
                  <b> Street:</b>
                </td>
                <td>{obj.address.street}</td>
              </tr>

              <tr>
                <td>
                  <b> State:</b>
                </td>
                <td>{obj.address.state}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b> Zip:</b>
                </td>
                <td>{obj.address.zip}</td>
              </tr>
              <tr>
                <td>
                  <b> Coordinates:</b>
                </td>
                <td>
                  <b> Latitude: </b>
                  {obj.address.coordinates.latitude}
                  <p></p>
                  <b> longitude:</b> {obj.address.coordinates.longitude}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b> Type:</b>
                </td>
                <td>{obj.type}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b> Price:</b>
                </td>
                <td>{obj.price} USD</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b> Phone:</b>
                </td>
                <td>{obj.phone}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b> Square:</b>
                </td>
                <td>{obj.square} Square foots </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b>HasBasement:</b>
                </td>
                <td>{obj.hasBasement == false ? "no" : "yes"}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b>Description:</b>
                </td>
                <td>{obj.description} </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b>Garage:</b>
                </td>
                <td>{obj.garage} </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b>Bedrooms:</b>
                </td>
                <td>{obj.bedrooms} </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b>Amenities:</b>
                </td>
                <td>
                  {obj.amenities.map((elem) => (
                    <p key={elem}>{elem}</p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn__back" onClick={() => back()}>
            Назад
          </button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
