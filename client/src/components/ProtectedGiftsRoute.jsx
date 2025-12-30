import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function ProtectedGiftsRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setAllowed(false);
      } else {
        const delivered = user.user_metadata?.giftsDelivered;
        setAllowed(!delivered); // ❌ block if already delivered
      }

      setLoading(false);
    };

    checkAccess();
  }, []);

  if (loading) return null; // or a loader

  if (!allowed) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
