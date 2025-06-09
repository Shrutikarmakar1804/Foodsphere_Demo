import Grid from '@mui/material/Grid';
import IngredientTable from './IngredientTable';
import IngredientCategoryTable from './IngredientCategoryTable';

export default function Ingredients() {
  return (
    <div className="px-4 py-4">
      <Grid container spacing={2}>
        <Grid size={{ xs:6, lg:6 }} >
          <IngredientTable />
        </Grid>
        <Grid size={{ xs:6 }} >
          <IngredientCategoryTable />
        </Grid>
      </Grid>
    </div>
  );
}
