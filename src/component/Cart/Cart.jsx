import { useEffect, useState } from "react";
import {
  Divider,
  Button,
  Modal,
  Box,
  TextField,
  Grid,
} from "@mui/material";
import CartItem from "./CartItem";
import { Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { findUserCart } from "../State/Cart/Action";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};

const Cart = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");

  const cart = useSelector((state) => state.cart) || {};
  const auth = useSelector((state) => state.auth) || {};
  const cartItems = cart.cartItems || [];
  const cartInfo = cart.cart || {};

  // ✅ Fetch cart on mount
  useEffect(() => {
    if (jwt) dispatch(findUserCart(jwt));
  }, [dispatch, jwt]);

  const handleProceedToPay = () => {
    navigate("/payment");
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = (value) => {
    const restaurantId = cartItems[0]?.food?.restaurant?.id;
    if (!restaurantId) return;

    const data = {
      jwt,
      order: {
        restaurantId,
        deliveryAddress: {
          fullName: auth.user?.fullName || "",
          streetAddress: value.streetAddress,
          city: value.city,
          state: value.state,
          pincode: value.pincode,
          country: "India",
        },
      },
    };
    dispatch(createOrder(data));
  };

  return (
  <main className="p-5 space-y-5">
    {auth.user && cartItems.length > 0 ? (
      <>
        {/* Cart Section */}
        <section className="bg-black p-5 rounded-lg shadow-sm space-y-4">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}

          <Divider />

          {/* Membership */}
          <div className="bg-white p-4 rounded-lg shadow-lg ring-1 ring-pink-400/50 hover:shadow-pink-400 transition duration-300">
            <h3 className="text-purple-700 font-bold mb-2">
              Renew <span className="bg-yellow-300 px-2 rounded">Pass</span> & Save More
            </h3>
            <p className="text-gray-600">You saved ₹50 so far.</p>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => alert("Pass added to cart")}
              sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#115293" }, mt: 2 }}
            >
              Add 1 Month @ ₹19
            </Button>
          </div>

          <Divider />

          {/* Billing */}
          <div className="space-y-3 pt-5 text-white">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{cartInfo.total || 0}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{cartInfo.deliveryFee || 0}</span>
            </div>
            <div className="flex justify-between">
              <span>GST & Restaurant Charges</span>
              <span>₹{cartInfo.gstCharges || 0}</span>
            </div>
            <Divider />
            <div className="flex justify-between font-bold">
              <span>Total Pay</span>
              <span>₹{cartInfo.total || 0}</span>
            </div>
          </div>
        </section>

        {/* Address Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field as={TextField} name="state" label="State" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Field as={TextField} name="city" label="City" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Field as={TextField} name="pincode" label="Pincode" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#115293" } }}
                    >
                      Deliver Here
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Box>
        </Modal>

        <div className="flex justify-end">
          <Button
            variant="contained"
            onClick={handleProceedToPay}
            sx={{ mt: 2 }}
          >
            Proceed to Pay
          </Button>
        </div>
      </>
    ) : (
      <section className="bg-black p-10 rounded-lg text-center text-white shadow-md">
        <p className="text-lg font-medium">
          {auth.user ? "Your cart is empty." : "Please login to view your cart."}
        </p>
      </section>
    )}
  </main>
  );
}

export default Cart;
