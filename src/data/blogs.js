import solidImage from "../assets/blogs/solid.png";
import designPattern from "../assets/blogs/design_pattern.png";
import factoryDesignPattern from "../assets/blogs/factory_design_pattern.png";
import singletonDesignPattern from "../assets/blogs/singleton_design_pattern.png";
import pylint from "../assets/blogs/pylint.png";
import logging from "../assets/blogs/logging.png"

const blogsList = [
  {
    image: pylint,
    title: "Analyze python code with pylint",
    description:
      "Pylint is a static code analyzer for Python 2 or 3. Pylint analyses your code without actually running it.",
    link: "https://nirajanbekoju.notion.site/Improving-the-code-quality-with-linting-in-python-25b55d0db275491e9869942ca8d220a9",
  },
  {
    image: logging,
    title: "Logging in Python",
    description:
      "Logging in Python is a crucial aspect of software development, particularly for debugging, monitoring, and understanding the flow of your program.",
    link: "https://nirajanbekoju.notion.site/Logging-in-Python-c650d14288cb48378a844af7c0891be0",
  },
  {
    image: solidImage,
    title: "SOLID Design Pattern",
    description:
      "The SOLID principles are a set of five design principles that help software developers create more maintainable, and understandable code.",
    link: "https://nirajanbekoju.notion.site/SOLID-Design-Pattern-aa2ba26142294521b9f40346c020249a?pvs=4",
  },
  {
    image: designPattern,
    title: "Design Pattern",
    description:
      "A software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design.",
    link: "https://nirajanbekoju.notion.site/Design-Pattern-62202710a12c4997a8052178225185ee?pvs=4",
  },
  {
    image: factoryDesignPattern,
    title: "Factory Design Pattern",
    description:
      "The factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.",
    link: "https://nirajanbekoju.notion.site/Factory-Design-Pattern-a0fb4d82ef464d628b523db2ab49b29b?pvs=4",
  },
  {
    image: singletonDesignPattern,
    title: "Singleton Design Pattern",
    description:
      "Singleton is a creational design pattern that lets you ensure that a class has only one instance while providing a global access point to this instance.",
    link: "https://nirajanbekoju.notion.site/Singleton-Design-Pattern-e5fe67d5ff6e41e4a87d2dd755fb3253",
  },
];

export default blogsList;
