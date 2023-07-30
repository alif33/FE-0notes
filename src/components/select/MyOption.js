const Option = props => {
    const { innerProps, innerRef } = props;

    return (
        <span className="select-list" ref={innerRef} {...innerProps}>
            <h5>{props.data.label}</h5>
        </span>
    );
};

export default Option