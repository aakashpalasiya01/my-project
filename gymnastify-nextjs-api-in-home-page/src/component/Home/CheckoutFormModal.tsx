import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { setSubscriptionPlan } from "@/store/actions/authAction";
import CheckoutForm from "@/shared/stripe-setup";
import { StripeTokenType } from "@/types/commonTypes";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const CheckoutFormModal = ({ productId }: any) => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state: RootState) => state.auth);

    const [show, setShow] = useState(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setCardData = (cardTokenData: StripeTokenType) => {
        const body = {
            user_id: user?.user_id,
            product_id: productId,
            payment_token: cardTokenData.id
        }
        dispatch(setSubscriptionPlan(body)).then(res => {
            if(res.success) {
                Swal.fire({
                    title: "Subscribed!",
                    text: "You have been Subscribed successfully.",
                    icon: "success"
                });
                setLoaded(false);
                handleClose()
            }
        });
    }

    return (
      <>
        <button className="primary_btn btn_blockmd" onClick={handleShow}>
            Get Started
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CheckoutForm setCardData={setCardData} loaded={loaded} setLoaded={setLoaded} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default CheckoutFormModal