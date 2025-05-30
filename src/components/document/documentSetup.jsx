import { useEffect } from "react";
import logoImg from "../../assets/logo4.png";

const useDocumentSetup = () => {
  useEffect(() => {
    document.title = "PUNK Platform - Cowboy Students Assistant";

    const setMeta = () => {
      const existingDescription = document.querySelector(
        'meta[name="description"]'
      );
      const descriptionContent =
        "Joki tugas kuliah untuk cowboy students! Serahin tugas coding, data, cloud, machine learning ke kita. Kualitas aman, deadline gas, lo tinggal santai dan tidur cantik.";

      if (existingDescription) {
        existingDescription.setAttribute("content", descriptionContent);
      } else {
        const metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        metaDescription.content = descriptionContent;
        document.head.appendChild(metaDescription);
      }

      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (existingFavicon) {
        existingFavicon.href = logoImg;
      } else {
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = logoImg;
        favicon.type = "image/png";
        document.head.appendChild(favicon);
      }

      // Load fonts & preconnects
      const fonts = [
        "https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
        "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
      ];
      fonts.forEach((fontUrl) => {
        if (!document.querySelector(`link[href="${fontUrl}"]`)) {
          const link = document.createElement("link");
          link.href = fontUrl;
          link.rel = "stylesheet";
          document.head.appendChild(link);
        }
      });

      const preconnects = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
      ];
      preconnects.forEach((url, index) => {
        if (!document.querySelector(`link[href="${url}"]`)) {
          const link = document.createElement("link");
          link.href = url;
          link.rel = "preconnect";
          if (index === 1) link.crossOrigin = "anonymous";
          document.head.appendChild(link);
        }
      });
    };

    setMeta();
  }, []);
};

export default useDocumentSetup;
