FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV DEBUG True
ENV DB_NAME postgres
ENV DB_USER postgres
ENV DB_PASSWORD postgres
ENV DB_HOST db

WORKDIR /app

RUN pip install pipenv
COPY Pipfile* /app/
RUN pipenv install --system --dev

ADD ./backend ./backend
COPY manage.py /app/

# RUN python manage.py migrate
