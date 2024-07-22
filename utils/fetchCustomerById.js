import { useEffect } from "react";

export default function fetchCustomerById(isReady, customerId, setData) {
  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
}
