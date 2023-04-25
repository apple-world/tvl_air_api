FROM node:16.15.0

ADD . /app
WORKDIR /app

RUN sed -i 's/localhost/${DB_HOST}/' .env
RUN npm ci
RUN rm -f .npmrc

ENV HOST localhost
ENV PORT 5000
ENV TZ Asia/Tokyo

COPY docker-entrypoint.sh .

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "run", "start"] 
