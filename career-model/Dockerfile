# specifies the Parent Image from which you are building.
FROM python:3.9

# specify the working directory for the image
WORKDIR /code

# copy requirements.txt to working directory
COPY ./requirements.txt /code/requirements.txt

# install dependencies
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# copy ./app directory
COPY ./app /code/app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
