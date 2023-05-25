import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const jsonData = [
  {
    "title": "Cuadro Iron man dark",
    "price": 1200,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-Advengers-Ironman-Cuadrado.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "title": "Cuadro Bob esponja ",
    "price": 1200,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-BobEsponja-Cuadrado.jpg",
    "rating": { "rate": 4.1, "count": 259 }
  },
  {
    "title": "Cuadro Calamardo",
    "price": 1200,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-Calamardo-Cuadrado.jpg",
    "rating": { "rate": 4.7, "count": 500 }
  },
  {
    "title": "Cuadro Goku Sayayin",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-DragonBall-Goku-SuperSayayin-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Goku Transformacion",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-DragonBall-Goku-Transformacion-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Goku Nube",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-DragonBall-GokuNubeShenglong-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Majinbuu",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-DragonBall-MajinBuu-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Shenlong",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-DragonBall-Shenlong-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Vegeta Transform",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-DragonBall-Vegeta--Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Escandalosos - Panda",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-Escandalosos-Panda-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Escandalosos - Polar",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-Escandalosos-Polar-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Escandalosos - Pardo",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-Escandalosos-Pardo-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Cuadro Felix",
    "price": 1200,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "categoria": "cuadros",
    "image": "images/productos/cuadros/Cuadro-Mockup-GatoFelix-Cuadrado.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "title": "Remera Shenlong",
    "price": 990,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "categoria": "remeras",
    "image": "images/productos/remeras/shenlong-black.jpg",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "title": "Remera Si me encuentran",
    "price": 990,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "categoria": "remeras",
    "image": "images/productos/remeras/si-me-encuentran.jpg",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "title": "Remera Stay at home",
    "price": 990,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "categoria": "remeras",
    "image": "images/productos/remeras/stay-at-home.jpg",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "title": "Remera Stewee",
    "price": 990,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "categoria": "remeras",
    "image": "images/productos/remeras/stewee-rugrats-white.jpg",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "title": "Remera Vago",
    "price": 990,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "categoria": "remeras",
    "image": "images/productos/remeras/vago.jpg",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "title": "Remera Water Scratchy",
    "price": 990,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "categoria": "remeras",
    "image": "images/productos/remeras/water-scratchy-white.jpg",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "title": "Remera Wine",
    "price": 990,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "categoria": "remeras",
    "image": "images/productos/remeras/wine-just-drink-it.jpg",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "title": "Almohadon Ferrari F1 ",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/Almohadon-F1-Ferrari.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Alohadon Mercedez F1",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/Almohadon-F1-Mercedes.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Redbull F1",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/Almohadon-F1-RedBullTeam.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Ladrillos SuperMario",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/Almohadon-LadrillosMario.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Pregunta SuperMario",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/Almohadon-Pregunta-Marioi.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Yoshi",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/Almohadon-Yoshi.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Hulk",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/AlmohadonMockupRemEnterprises-Advengers-Hulk.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Ironman",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/AlmohadonMockupRemEnterprises-Advengers-Ironman.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Bob Esponja",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/AlmohadonMockupRemEnterprises-BobEsponja-Bob.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Calamardo",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/AlmohadonMockupRemEnterprises-BobEsponja-Calamardo.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Patricio",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/AlmohadonMockupRemEnterprises-BobEsponja-Patricio.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Dobbie colors",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/AlmohadonMockupRemEnterprises-DobbieColors.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Dobbie dark",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/AlmohadonMockupRemEnterprises-DobbieFace.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "title": "Almohadon Panda",
    "price": 1400,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "categoria": "almohadones",
    "image": "images/productos/almohadones/AlmohadonMockupRemEnterprises-Escandalosos-Panda.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  }
];

const importarJSONAFirebase = async (jsonData) => {
  try {
    const collectionRef = collection(db, "productos");

    for (const item of jsonData) {
      await addDoc(collectionRef, item);
    }

    console.log("Importación exitosa.");
  } catch (error) {
    console.error("Error al importar el JSON:", error);
  }
};

const ImportFire = () => {
  const [imported, setImported] = useState(false);

  useEffect(() => {
    if (imported) {
      importarJSONAFirebase(jsonData);
    }
  }, [imported]);

  const handleImportClick = () => {
    setImported(true);
  };

  return (
    <div>
      {imported ? (
        <div>Importing JSON to Firebase...</div>
      ) : (
        <button onClick={handleImportClick}>Import JSON to Firebase</button>
      )}
    </div>
  );
};

export default ImportFire;
