import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: anaskhangiki@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/anas-khaan",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/anas-khaan",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(currentScrollPos < 200 || prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const translateYValue = visible ? "0" : "-200px";

  return (
    <Box
      ref={headerRef}
      style={{
        transform: `translateY(${translateYValue})`,
        transition: "transform 0.3s ease-in-out",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#18181b",
      }}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <a href="#projects-section">Projects</a>
              <a href="#contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
