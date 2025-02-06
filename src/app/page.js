"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { validateToken } from "./api/auth";

const widgetId = "test";

export default function Home() {
    const searchParams = useSearchParams();
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
      const alpbToken = searchParams.get("alpb_token");
      console.log(alpbToken)
      if (!alpbToken || !widgetId) {
        setIsAuthorized(false);
        return;
      }
      validateToken(widgetId, alpbToken)
        .then((validated) => {
          console.log({ validated})
          setIsAuthorized(validated)
      })
    }, [searchParams]);

    return (
      <div className="min-h-dvh flex justify-center items-center font-mono text-5xl">
        {isAuthorized ? "Welcome to this secret widget" : "Unauthorized"}
      </div>
    )
}
