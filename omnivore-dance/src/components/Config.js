import { useEffect, useState, useContext } from "react";

import axios from "axios";
import { LanguageContext } from "./LanguageProvider";

export function useLocalizedConfig(config) {
  const { lang } = useContext(LanguageContext);
  const [contents, setContents] = useState(null);

  useEffect(() => {
    axios.get(`/config/${config}`).then((resp) => {
      console.log(resp.data);
      setContents(resp.data);
    });
  }, [lang, config]);

  return contents;
}
