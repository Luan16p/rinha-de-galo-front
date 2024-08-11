import * as React from 'react';

import Alert from '@mui/material/Alert';

function AlertUsers() {
  return (
    <Alert variant="filled" severity="error">
      Atenção: Este conteúdo é apenas uma brincadeira. Rinhas de galo são ilegais e cruéis. Jamais promova ou participe de qualquer atividade desse tipo.
    </Alert>
  );
}

export default AlertUsers;