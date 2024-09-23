import React, { Component } from "react";

class ScrollButton extends Component {
  state = {
    isScrolledToBottom: false,
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const isScrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
    const isScrolled = window.scrollY > 0;

    this.setState({ isScrolledToBottom, isScrolled });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { isScrolledToBottom, isScrolled } = this.state;

    return (
      <div className={`scroll-button-container ${isScrolled ? "visible" : ""}`}>
        <button
          className="scroll-button"
          onClick={
            isScrolled
              ? isScrolledToBottom
                ? this.scrollToTop
                : this.scrollToBottom
              : null
          }
        >
          {isScrolled ? (isScrolledToBottom ? "▲" : "▼") : "▼"}
        </button>
      </div>
    );
  }
}

export default ScrollButton;
