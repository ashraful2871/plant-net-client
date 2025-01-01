import { Helmet } from "react-helmet-async";
import AddPlantForm from "../../../components/Form/AddPlantForm";
import imageUpload from "../../../api/utils";
import { useContext, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddPlant = () => {
  const { user } = useAuth();
  const [uploadButtonTExt, setUploadButtonText] = useState("upload image");
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const image = form.image.files[0];
    const imageUrl = await imageUpload(image);

    //seller info
    const seller = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    //create plant data in object
    const plantData = {
      name,
      description,
      category,
      price,
      quantity,
      imageUrl,
      seller,
    };
    console.table(plantData);

    //save plat in db
    try {
      await axiosSecure.post("/plants", plantData);
      toast.success("data added successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Add Plant | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddPlantForm
        handleSubmit={handleSubmit}
        uploadButtonTExt={uploadButtonTExt}
        setUploadButtonText={setUploadButtonText}
        loading={loading}
      />
    </div>
  );
};

export default AddPlant;
