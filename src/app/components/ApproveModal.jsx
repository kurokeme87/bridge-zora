const ApproveModal = ({ onApprove, showApprove }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "16px 0px 0px",
        boxSizing: "border-box",
      }}
    >
      <button
        id="custom-approve-button"
        tabindex="-1"
        type="button"
        disabled=""
        style={{
          color: "rgba(255, 255, 255, 0.298)",
          boxShadow: "none",
          backgroundColor: showApprove
            ? "rgb(124, 58, 237)"
            : "rgba(71, 85, 105, 0.2)",
          cursor: showApprove ? "pointer" : "default",
          color: showApprove ? "white" : "rgba(255, 255, 255, 0.298)",
          display: "flex",
          WebkitBoxAlign: "center",
          alignItems: "center",
          WebkitBoxPack: "center",
          justifyContent: "center",
          position: "relative",
          boxSizing: "border-box",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          outline: "rgba(255, 255, 255, 0.298) none 0px",
          border: "0px none rgba(255, 255, 255, 0.298)",
          margin: "0px",
          userSelect: "none",
          verticalAlign: "middle",
          appearance: "none",
          textDecoration: "none solid rgba(255, 255, 255, 0.298)",
          textTransform: "none",
          fontWeight: 500,
          fontFamily:
            '"IBM Plex Sans", "Maison Neue", Helvetica, Arial, sans-serif',
          fontSize: "14px",
          lineHeight: "24.5px",
          padding: "6px 16px",
          transition:
            "background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s",
          borderRadius: "8px",
          backgroundSize: "250% 250%",
          minWidth: "100px",
          width: "100%",
          height: "48px",
        }}
        onClick={onApprove}
      >
        <div
          style={{
            margin: "0px",
            fontFamily:
              '"IBM Plex Sans", "Maison Neue", Helvetica, Arial, sans-serif',
            lineHeight: "24px",
            fontSize: "16px",
            fontWeight: 500,
            textAlign: "center",
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          Approve
        </div>
      </button>
      <button
        tabindex="-1"
        type="button"
        disabled=""
        style={{
          color: "rgba(255, 255, 255, 0.298)",
          boxShadow: "none",
          backgroundColor: "rgba(71, 85, 105, 0.2)",
          pointerEvents: "none",
          cursor: "default",
          display: "flex",
          WebkitBoxAlign: "center",
          alignItems: "center",
          WebkitBoxPack: "center",
          justifyContent: "center",
          position: "relative",
          boxSizing: "border-box",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          outline: "rgba(255, 255, 255, 0.298) none 0px",
          border: "0px none rgba(255, 255, 255, 0.298)",
          margin: "0px 0px 0px 8px",
          userSelect: "none",
          verticalAlign: "middle",
          appearance: "none",
          textDecoration: "none solid rgba(255, 255, 255, 0.298)",
          textTransform: "none",
          fontWeight: 500,
          fontFamily:
            '"IBM Plex Sans", "Maison Neue", Helvetica, Arial, sans-serif',
          fontSize: "14px",
          lineHeight: "24.5px",
          padding: "6px 16px",
          transition:
            "background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s",
          borderRadius: "8px",
          backgroundSize: "250% 250%",
          minWidth: "80px",
          width: "100%",
          height: "48px",
        }}
      >
        <div
          style={{
            margin: "0px",
            fontFamily:
              '"IBM Plex Sans", "Maison Neue", Helvetica, Arial, sans-serif',
            lineHeight: "24px",
            fontSize: "16px",
            fontWeight: 500,
            textAlign: "center",
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          Lock
        </div>
      </button>
    </div>
  );
};

export default ApproveModal;
