import * as React from 'react';

import Alert from '@mui/material/Alert';

function AlertUsers({place, type}) {
  return <Alert severity={type || "info"}>{place || "Mensagem não definida"}</Alert>;
}

export default AlertUsers;