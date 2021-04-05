FROM node:14-alpine

WORKDIR /app
COPY package*.json /app/

RUN apk --no-cache add shadow \                                                                   
    gcc \                                                                                         
    musl-dev \                                                                                    
    autoconf \                                                                                    
    automake \                                                                                    
    make \                                                                                        
    libtool \                                                                                     
    nasm \                                                                                        
    tiff \                                                                                        
    jpeg \                                                                                                                                                                   
    file \                                                                                        
    pkgconf \  
    && npm i

COPY . /app/
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start"]
