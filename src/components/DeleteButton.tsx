import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteButtonProps {
  onClick: () => void;
}

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        color: '#555', 
        display: 'flex',
        alignItems: 'center',
      }}
      aria-label="Delete"
    >
      <DeleteIcon />
    </button>
  );
}