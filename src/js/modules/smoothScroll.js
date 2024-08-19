export const smoothScroll = (ref) => {

    if (ref.current) {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    }
};
