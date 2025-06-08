import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

const AddressCard = ({ item, showButton, handleSelectAddress, handleEdit, handleDelete }) => {
  return (
    <Card className="flex flex-col gap-3 w-64 p-5 bg-[#1e1e1e] text-white">
      <div className="flex items-center gap-2">
        <HomeIcon className="text-white" />
        <h1 className="font-semibold text-lg">{item.name || 'Unnamed Address'}</h1>
      </div>
      <p className="text-gray-400">
        {item.street}, {item.city} - {item.zip}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelectAddress(item)}
          >
            Select
          </Button>
        )}
        <Button variant="outlined" color="info" onClick={() => handleEdit(item)}>
          Edit
        </Button>
        <Button variant="outlined" color="error" onClick={() => handleDelete(item)}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default AddressCard;
