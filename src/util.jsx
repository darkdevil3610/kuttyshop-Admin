import React, {
  forwardRef, useState, useImperativeHandle, useRef, useEffect,
} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const isLoading = (trueFalse, component, className = '', secondComponent = null) => {
  if (secondComponent) {
    return (
      trueFalse
        ? secondComponent
        : component
    );
  }
  return (
    trueFalse
      ? <div className={className}><CircularProgress /></div>
      : component
  );
};

export const findID = (id) => (obj) => obj.id === id;

export const FormImage = forwardRef(({
  img,
}, ref) => {
  const [src, setSrc] = useState(img.src);
  const [alt, setAlt] = useState(img.alt);
  const [srcMobile, setSrcMobile] = useState(img.srcMobile || '');
  const [link, setLink] = useState(img.link || '');
  useImperativeHandle(ref, () => ({
    getData: () => ({
      src, alt, srcMobile, link, id: img.id,
    }),
  }));
  return (
    <Grid item xs={12}>
      <Divider sx={{ m: 3 }} />
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ImgRatio src={img.src} alt={img.alt} aspectRatio={4 / 3} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container columnGap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="src"
                label="Direction"
                name="src"
                value={src}
                onChange={(e) => setSrc(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="alt"
                label="Description"
                name="alt"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                fullWidth
                id="srcMobile"
                label="Direction for view mobile"
                name="srcMobile"
                value={srcMobile}
                onChange={(e) => setSrcMobile(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                fullWidth
                id="link"
                label="Redirection"
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

export const FormText = forwardRef(({
  text,
}, ref) => {
  const [name, setName] = useState(text.name);
  const [description, setDescription] = useState(text.description || '');
  const [link, setLink] = useState(text.link || '');

  useImperativeHandle(ref, () => ({
    getData: () => ({
      name, description, link, id: text.id,
    }),
  }));

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography component="h1" variant="h4" textAlign="center" fontWeight="bold">
            {text.name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container columnGap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                fullWidth
                required
                id="name"
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                fullWidth
                id="link"
                label="Redirection"
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={11.2}>
              <TextField
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                name="description"
                multiline
                placeholder="Placeholder"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

export function FormBox({ handleSubmit, children, changes }) {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Grid
        container
        maxWidth="lg"
        sx={{
          marginLeft: -3,
          width: '100%',
          display: 'flex',
        }}
        rowSpacing={2}
      >
        {children}
        <Grid item xs={10} />
        <Grid item xs={2}>
          <Button type="submit" fullWidth variant="contained" disabled={changes}>
            <Typography component="h1" variant="h6" color="white">
              Save
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export const FormBrand = forwardRef(({ brand }, ref) => {
  const [name, setName] = useState(brand.name);
  const [src, setSrc] = useState(brand.src);

  useImperativeHandle(ref, () => ({
    getData: () => ({
      name, src, id: brand.id,
    }),
  }));

  return (
    <Grid item xs={12}>
      <Divider sx={{ m: 3 }} />
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ImgRatio src={brand.src} alt={brand.alt} aspectRatio={4 / 3} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container columnGap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="src"
                label="Direction"
                name="src"
                value={src}
                onChange={(e) => setSrc(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

export const FormShop = forwardRef(({ shop }, ref) => {
  const [name, setName] = useState(shop.name);
  const [city, setCity] = useState(shop.city);
  const [direcction, setDirecction] = useState(shop.direcction);
  const [phone, setPhone] = useState(shop.phone);
  const [email, setEmail] = useState(shop.email);
  const [workingHours, setWorkingHours] = useState(shop.workingHours);
  const [src, setSrc] = useState(shop.src);

  useImperativeHandle(ref, () => ({
    getData: () => ({
      name, city, direcction, phone, email, workingHours, src, id: shop.id,
    }),
  }));

  return (
    <Grid item xs={12}>
      <Divider sx={{ m: 3 }} />
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ImgRatio src={shop.src} alt={shop.alt} aspectRatio={4 / 3} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container columnGap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="src"
                label="Image"
                name="src"
                value={src}
                onChange={(e) => setSrc(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="direcction"
                label="Direcction"
                name="direcction"
                value={direcction}
                onChange={(e) => setDirecction(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="workingHours"
                label="workingHours"
                name="workingHours"
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

export const FormItem = forwardRef(({ item, edit }, ref) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (edit) {
      setName(item.name);
      setCost(Number(item.cost));
      setStock(item.stock);
      setDescription(item.description);
      setBrand(item.brand);
      setSrc(item.src);
    }
  }, [item, edit]);

  useImperativeHandle(ref, () => ({
    getData: () => ({
      name, cost, stock, description, brand, src,
    }),
  }));
  return (
    <Grid container columnGap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={5}>
        <TextField
          margin="normal"
          fullWidth
          required
          id="name"
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          margin="normal"
          fullWidth
          id="cost"
          type="number"
          label="Cost"
          name="cost"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          margin="normal"
          fullWidth
          id="stock"
          label="Stock"
          type="number"
          name="stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          fullWidth
          id="brand"
          label="Brand"
          name="brand"
          multiline
          placeholder="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </Grid>
      <Grid item xs={7.2}>
        <TextField
          margin="normal"
          fullWidth
          id="src"
          label="Src"
          name="src"
          multiline
          placeholder="src"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
      </Grid>

      <Grid item xs={11.4}>
        <TextField
          margin="normal"
          fullWidth
          id="description"
          label="Description"
          name="description"
          multiline
          placeholder="description"
          value={description}
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
    </Grid>
  );
});

export function ImgRatio({
  aspectRatio, src, alt, h = '100%',
}) {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: `${(1 / aspectRatio) * 100}%`,
  };

  if (h !== '100%') { containerStyle.height = h; containerStyle.paddingBottom = 0; }

  const imageStyle = {
    position: 'absolute',
    width: '100%',
    height: h,
    objectFit: 'cover',
  };

  return (
    <Box sx={containerStyle}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={imageStyle}
      />
    </Box>
  );
}
/*
export const useImage = (img) => {
  const [src, setSrc] = useState(img.src);
  const [alt, setAlt] = useState(img.alt);
  const [srcMobile, setSrcMobile] = useState(img.srcMobile);
  const [imgLink, setImgLink] = useState(img.link);
};
*/

export const useForm = () => {
  const ref = useRef();
  const getData = () => ref.current.getData();
  return [ref, getData];
};

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleChange = () => setOpen((o) => !o);

  return { open, handleChange };
};
