
const scrollToElement = (className: string) => {
    setTimeout(() => {
        const scrollElement = document.querySelector(`.${className}`);
        if (scrollElement) {
            scrollElement.scrollIntoView({ behavior: "smooth" });
        }
    }, 0);
};

export default scrollToElement;